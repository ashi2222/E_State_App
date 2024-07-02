import React from 'react';
import './Agents.css';

const Agents = () => {
  // Dummy data for agents
  const agents = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '+1 (123) 456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '+1 (234) 567-8901' },
    { id: 3, name: 'Mike Johnson', email: 'mike.johnson@example.com', phone: '+1 (345) 678-9012' },
  ];

  return (
    <div className="agents-container">
      <h1 className="agents-title">Our Agents</h1>
      <div className="agents-list">
        {agents.map(agent => (
          <div key={agent.id} className="agent-card">
            <h2 className="agent-name">{agent.name}</h2>
            <p className="agent-info">
              Email: <a href={`mailto:${agent.email}`}>{agent.email}</a>
            </p>
            <p className="agent-info">
              Phone: <a href={`tel:${agent.phone}`}>{agent.phone}</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
