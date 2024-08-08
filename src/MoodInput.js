import React, { useState } from "react";
import axios from "axios";
import "./MoodInput.css";

export default function MoodInput() {
  return (
    <div className="MoodInput">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="How are you feeling ?"
              className="form-control"
            />
          </div>
          <div className="col-4">
            <input
              type="submit"
              value="Generate "
              className="btn btn-primary"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
