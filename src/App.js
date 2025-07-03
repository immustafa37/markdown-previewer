import React, { useState } from "react";
import { marked } from "marked";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to Markdown Previewer!

## Subheading
- List item
- **Bold text**
- *Italic text*
- [Link](https://reactjs.org)
- \`inline code\`

\`\`\`
function sayHello() {
  console.log("Hello, world!");
}
\`\`\`
`);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const getMarkdownText = () => {
    const rawMarkup = marked(markdown, { breaks: true });
    return { __html: rawMarkup };
  };

  return (
    <div className="container">
      <h1>📝 Markdown Previewer</h1>
      <div className="editor-preview">
        <textarea
          value={markdown}
          onChange={handleChange}
          className="editor"
        />
        <div
          className="preview"
          dangerouslySetInnerHTML={getMarkdownText()}
        />
      </div>
    </div>
  );
}

export default App;