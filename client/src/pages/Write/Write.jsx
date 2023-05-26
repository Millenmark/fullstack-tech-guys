import { useState } from "react";
import "./Write.module.css";
import ReactQuill from "react-quill";
import { Button } from "../../UI";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <div className="content">
        <input type="text" name="" id="" placeholder="Title" />
        <select name="category" id="category">
          <option value="science">Science</option>
          <option value="ai">AI</option>
          <option value="tech">Tech</option>
          <option value="computers">Computers</option>
          <option value="gaming">Gaming</option>
        </select>
        <div className="editor">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>

      <div className="menu">
        <input style={{ display: "none" }} type="file" name="file" id="file" />
        <label htmlFor="file">Upload Image</label>
        <div className="buttons">
          <Button>Save as draft</Button>
          <Button>Publish</Button>
        </div>
      </div>
    </div>
  );
};

export default Write;
