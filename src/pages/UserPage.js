import React from 'react';
import UserProfile from '../components/userProfile/UserProfile';
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
        <div className="lg:w-1/4 md:w-1/1 p-5 bg-gradient-to-t from-purple-100 to-transparent lg:shadow-x2 lg:border-r-4 border-grey-300">
          <UserProfile />
          <EventList />
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4 md:w-1/1 p-4 ">
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
