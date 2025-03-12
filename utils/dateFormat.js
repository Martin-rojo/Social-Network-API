// Function to format a timestamp
const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    
    // Get date parts
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    
    // Get time parts
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    
    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hours is 0, set to 12
    
    // Return formatted date string
    return `${month}/${day}/${year} at ${hours}:${minutes} ${period}`;
  };
  
  module.exports = formatDate;