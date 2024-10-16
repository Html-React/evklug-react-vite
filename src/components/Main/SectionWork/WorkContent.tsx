import { useState } from "react";
import { WorkList, WorkItem } from "./WorkList";
import styled from "styled-components";

const WorkContent: React.FC = () => {
  
  const [selectedWork, setSelectedWork] = useState<WorkItem>(WorkList[0]);

  const handleClick = (item: WorkItem) => {
    setSelectedWork(item);
  };

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        {WorkList.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item)}
            style={{ margin: "5px" }}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div>
        <h2>{selectedWork.title}</h2>
        <p>{selectedWork.description}</p>
      </div>
      <div>
        <img src={selectedWork.img} alt={selectedWork.alt} />
      </div>
    </div>
  );
};

export default WorkContent;
