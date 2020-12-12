// Sanitize dangerouslySetInnerHTML with DomPurify
import dompurify from "dompurify";

const sanitizer = dompurify.sanitize;

const Sanitizer = (data) => {
	return sanitizer(data);
};
export default Sanitizer;
