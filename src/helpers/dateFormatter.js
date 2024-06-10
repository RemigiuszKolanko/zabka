export const dateFormatter = (date) => {
    const parsedDate = new Date(date);
    return <span>{`${parsedDate.getFullYear()} -  ${parsedDate.getMonth() + 1} - ${parsedDate.getDate()}, godz: ${parsedDate.toLocaleTimeString().substring(0,5)}` }</span>;
}