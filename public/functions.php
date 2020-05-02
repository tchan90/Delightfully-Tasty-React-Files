<?php
add_theme_support('post-thumbnails');

add_action('rest_api_init', 'add_JSON');

add_filter('excerpt_length', function ($length) {
    return 20;
});

function add_cors_http_header()
{
    header("Access-Control-Allow-Origin: *");
}
add_action('init', 'add_cors_http_header');


// function postAuth_htaccess( $rules ){
//     add_rewrite_rule('RewriteCond %{HTTP:Authorization} ^(.)
//     RewriteRule ^(.) - [E=HTTP_AUTHORIZATION:%1]' )
//     return $rules
//  }
//  add_filter('mod_rewrite_rules', 'postAuth_htaccess');

function add_JSON()
{
    //Add featured image
    register_rest_field(
        'post', // Where to add the field (Here, blog posts. Could be an array)
        'featured_image_src', // Name of new field (You can call this anything)
        array(
            'get_callback'    => 'get_image_src',
            'update_callback' => null,
            'schema'          => null,
        )
    );
    //Add cats
    register_rest_field(
        'post', // Where to add the field (Here, blog posts. Could be an array)
        'cats', // Name of new field (You can call this anything)
        array(
            'get_callback'    => 'get_cat_names',
            'update_callback' => null,
            'schema'          => null,
        )
    );
    //Get next post
    register_rest_field(
        'post', // Where to add the field (Here, blog posts. Could be an array)
        'nextPost', // Name of new field (You can call this anything)
        array(
            'get_callback'    => 'nextPost',
            'update_callback' => null,
            'schema'          => null,
        )
    );
    //Get prev post
    register_rest_field(
        'post', // Where to add the field (Here, blog posts. Could be an array)
        'prevPost', // Name of new field (You can call this anything)
        array(
            'get_callback'    => 'prevPost',
            'update_callback' => null,
            'schema'          => null,
        )
    );
    //Get relevent posts
    register_rest_field(
        'post', // Where to add the field (Here, blog posts. Could be an array)
        'relPosts', // Name of new field (You can call this anything)
        array(
            'get_callback'    => 'relatedPosts',
            'update_callback' => null,
            'schema'          => null,
        )
    );
    //Get popular posts
    register_rest_field(
        'post', // Where to add the field (Here, blog posts. Could be an array)
        'viewCount', // Name of new field (You can call this anything)
        array(
            'get_callback'    => 'post_view_counter_function',
            'update_callback' => null,
            'schema'          => null,
        )
    );

    function get_image_src($object, $field_name, $request)
    {
        $feat_img_array = wp_get_attachment_image_src(
            $object['featured_media'], // Image attachment ID
            'large',  // Size.  Ex. "thumbnail", "large", "full", etc..
            true // Whether the image should be treated as an icon.
        );
        return $feat_img_array[0];
    }

    function get_cat_names($data, $post, $request)
    {

        $cat = get_the_category($post->ID);
        return $cat;
    }
    function nextPost()
    {
        $post = get_adjacent_post(false, '', true);
        return $post;
    }
    function prevPost()
    {
        $post = get_adjacent_post(false, '', false);
        return $post;
    }
    //Related posts
    function relatedPosts($post)
    {

        $id = get_the_ID($post);
        $related = get_posts(
            array(
                'category' => wp_get_post_categories($id),
                'numberposts'  => 3,
                'exclude' => array($id)
            )
        );

        if ($related) {
            foreach ($related as $post) {
                setup_postdata($post);
                return $related;
            }
            wp_reset_postdata();
        }
    }
}


function post_view_counter_function($post)
{
    $post_id = $post->ID;
    if (FALSE === get_post_status($post_id)) {
        return new WP_Error('error_no_post', 'Not a post id', array('status' => 404));
    } else {
        $current_views = get_post_meta($post_id, 'views', true);
        $views = $current_views + 1;
        update_post_meta($post_id, 'views', $views);
        return $views;
    }
}
