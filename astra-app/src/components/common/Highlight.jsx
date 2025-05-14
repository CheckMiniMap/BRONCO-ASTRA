import { useLocation } from 'react-router-dom';

const Highlight = ({ text }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');

  if (!query || !text) return <span>{text}</span>;

  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})`, 'gi');

  // split the text but don't test part-by-part using regex.test(part)
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) => {
        regex.lastIndex = 0;
        return regex.test(part) ? (
          <mark key={i}>{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </>
  );
};

export default Highlight;
