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

// Post Meta
add_action('rest_api_init', 'create_api_posts_meta_field');

//Page views
add_action('rest_api_init', function () {
    register_rest_route('base', '/views/(?P<id>\d+)', array(
        'methods' => 'GET',
        'callback' => 'post_view_counter_function',
    ));
});

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
    //Get post views
    // register_rest_field(
    //     'post', // Where to add the field (Here, blog posts. Could be an array)
    //     'viewCount', // Name of new field (You can call this anything)
    //     array(
    //         'get_callback'    => 'post_view_counter_function',
    //         'update_callback' => null,
    //         'schema'          => null,
    //     )
    // );
    //Post meta fields
    register_rest_field('post', 'post-meta-fields', array(
        'get_callback' => 'get_post_meta_for_api',
        'schema' => null,
    ));

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
    //post meta fields
    function get_post_meta_for_api($object)
    {
        //get the id of the post object array
        $post_id = $object['id'];

        //return the post meta
        return get_post_meta($post_id);
    }
    // //post view counter
    // function post_view_counter_function($post)
    // {
    //     $post_id = $post->ID;
    //     if (FALSE === get_post_status($post_id)) {
    //         return new WP_Error('error_no_post', 'Not a post id', array('status' => 404));
    //     } else {
    //         $current_views = get_post_meta($post_id, 'views', true);
    //         $views = $current_views + 1;
    //         update_post_meta($post_id, 'views', $views);
    //         return $views;
    //     }
    // }
}
