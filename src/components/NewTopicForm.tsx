import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch } from "../app/hooks";
import ROUTES from "../app/routes";
import { ALL_ICONS } from "../data/icons";
import { addTopic } from "../features/topics/topicsSlice";

export default function NewTopicForm() {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const history = useHistory();
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.length === 0) {
      return;
    }
    const newId = uuidv4();
    const newTopic = {
        id: newId,
        name: name,
        icon: icon,
        quizIds: []
    }
    dispatch(addTopic(newTopic));
    history.push(ROUTES.topicsRoute());
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1 className="center">Create a new topic</h1>
        <div className="form-section">
          <input
            id="topic-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Topic Name"
          />
          <select
            onChange={(e) => setIcon(e.currentTarget.value)}
            required
            defaultValue="default"
          >
            <option value="default" disabled hidden>
              Choose an icon
            </option>
            {ALL_ICONS.map(({ name, url }) => (
              <option key={url} value={url}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <button className="center">Add Topic</button>
      </form>
    </section>
  );
}
