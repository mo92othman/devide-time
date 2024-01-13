import React from 'react';
import UserProfile from '../components/event/UserProfile';
import EventList from '../components/event/EventList';
import EventDetail from '../components/event/EventDetail';
import Header from '../components/Header';
import { useAppState } from '../AppStateContext'; // Import the context

import emptyImage from '../assets/empty.jpg'; // Import the image

function UserPage() {
  const { state } = useAppState(); // Access the global state

  return (
    <>
      <Header />
      <div className="lg:flex  mr-auto">
        {/* Sidebar */}
        <div className="w-1/4 p-5 bg-gradient-to-t from-purple-50 to-transparent shadow-x2 border-r-4 border-grey-300">
          <UserProfile />
          <EventList />
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-4 bg-gradient-to-b from-purple-50 to-transparent">
          {state.events.length === 0 ? (
            <div className="text-center text-gray-500  min-h-screen py-8">
              <h1 className="text-2xl font-bold mb-4">
                You don't have any events. Add an event to get started!
              </h1>
              <img
                src={emptyImage}
                alt="Empty"
                className="mt-4 w-1/3 h-auto mx-auto rounded-3xl"
              />
            </div>
          ) : (
            <EventDetail />
          )}
        </div>
      </div>
    </>
  );
}

export default UserPage;
