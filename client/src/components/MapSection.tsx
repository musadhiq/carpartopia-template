
import React from 'react';

const MapSection = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg h-[400px] md:h-[500px]">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM03CsDE3JzU2LjQiTiA4NMKwMjgnMzEuMCJX!5e0!3m2!1sen!2sus!4v1629919173017!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        title="Car Partopia Location"
      ></iframe>
    </div>
  );
};

export default MapSection;
