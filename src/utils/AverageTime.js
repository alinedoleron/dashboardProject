const getDays = (datesDiff) => {
    return datesDiff/86400000;
}

const getHours = (daysDiff) => {
    return daysDiff * 24;
}

const getMinutes = (hoursDiff) => {
    return hoursDiff * 60;
}

const getAverageTime = (nodes) => {
    let totalDays = 0;
    let totalHours = 0;
    let totalMinutes = 0;

    nodes.map((node) =>
            {
                let created = new Date(node.createdAt);
                let closed = new Date(node.closedAt);
                totalDays += getDays(closed - created);
                totalHours += getHours(totalDays - Math.floor(totalDays));
                totalMinutes += getMinutes(totalHours - Math.floor(totalHours));
            }
            );

            let totalNodes = nodes.length;

            return Math.floor(totalDays/totalNodes) + 'days '
                + Math.floor(totalHours/totalNodes)+'h'
                + Math.floor(totalMinutes/totalNodes)+'m';

}

const getAverageTimeInHours = (nodes) => {
    let totalDays = 0;

    nodes.map((node) =>
            {
                let created = new Date(node.createdAt);
                let closed = new Date(node.closedAt);
                totalDays += getDays(closed - created);
            }
            );

            let totalNodes = nodes.length;

            return (getHours(totalDays) + getHours(totalDays - Math.floor(totalDays)))/totalNodes;
}

export {getAverageTime, getAverageTimeInHours};