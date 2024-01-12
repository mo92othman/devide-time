// UserPage.js
import React from 'react';
import UserProfile from '../components/event/UserProfile';
import EventList from '../components/event/EventList';
import NewEventForm from '../components/event/NewEventForm';
import EventDetail from '../components/event/EventDetail';
import Header from '../components/Header';
function UserPage() {
  return (
    <>
      <Header />
      <div class="lg:flex">
        {/* Sidebar */}
        <div className="w-1/4 p-4">
          <UserProfile />
          <EventList />
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-4">
          <EventDetail />
        </div>
      </div>
    </>
  );
}

export default UserPage;
