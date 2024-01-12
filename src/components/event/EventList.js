import React from 'react';

function EventList() {
  // Fetch events data from data.js or API
  const events = [
    { id: 1, name: 'Event 1' },
    { id: 2, name: 'Event 2' },
    { id: 3, name: 'Event 2' },
  ];

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Events</h3>
      <ul className="list-disc pl-4">
        {events.map((event) => (
          <li key={event.id} className="mb-2">
            {event.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
