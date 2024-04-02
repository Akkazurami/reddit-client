export function timeSinceCreation(creationDate) {
    let currentDate = new Date();
    let createdDate = new Date(creationDate * 1000);
    let timeSince = (currentDate - createdDate) / 1000;
    if (timeSince < 60) {
        timeSince = "Less than a minute ago";
    } else if (timeSince < 120) {
        timeSince = "1 minute ago";
    } else if (timeSince < 3600) {
        timeSince = Math.round(timeSince / 60) + " minutes ago";
    } else if (timeSince < 7200) {
        timeSince = "1 hour ago";
    } else if (timeSince < 86400) {
        timeSince = Math.round(timeSince / 3600) + " hours ago";
    } else if (timeSince < 172800) {
        timeSince = "1 day ago";
    } else if (timeSince < 2592000) {
        timeSince = Math.round(timeSince / 86400) + " days ago";
    } else if (timeSince < 5184000) {
        timeSince = "1 month ago";
    } else if (timeSince < 31104000) {
        timeSince = Math.round(timeSince / 5184000) + " months ago";
    } else if (timeSince < 62208000) {
        timeSince = "1 year ago";
    } else {
        timeSince = Math.round(timeSince / 31104000) + " years ago";
    }

    return timeSince;
}