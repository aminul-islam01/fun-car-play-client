

const Blog = () => {
    return (
        <div className="w-2/3 mx-auto my-10">
            <div className="mb-5">
                <h2 className="text-2xl font-semibold">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p><span className="font-bold">Answer:</span> Refresh tokens allow you to balance your users access needs with your organizations security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions.</p>
                <img src="https://i.stack.imgur.com/BPJjA.png" alt="" />
            </div>
            <div className="mb-5">
                <h2 className="text-2xl font-semibold">2. Compare SQL and NoSQL databases?</h2>
                <p><span className="font-bold">Answer:</span>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
            <div className="mb-5">
                <h2 className="text-2xl font-semibold">3. What is express js?</h2>
                <p><span className="font-bold">Answer:</span> Express.js is a popular and lightweight web application framework for Node.js. Express.js simplifies the process of handling HTTP requests and responses, routing, middleware integration, and view rendering. It provides a set of methods and middleware functions that allow you to define routes and handle different HTTP methods like GET, POST, PUT, DELETE, etc. You can use Express.js to create server-side applications, RESTful APIs, or even serve static files.</p>
            </div>
            <div className="mb-5">
                <h2 className="text-2xl font-semibold">4. What is Nest JS ?</h2>
                <p><span className="font-bold">Answer:</span> NestJS is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It is built with TypeScript and takes advantage of its strong typing capabilities, allowing developers to write structured and statically typed code.</p>
            </div>
            <div className="mb-5">
                <h2 className="text-2xl font-semibold">5. What is MongoDB aggregate and how does it work?</h2>
                <p><span className="font-bold">Answer:</span> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
            </div>
        </div>
    );
};

export default Blog;