export const Number = ({ numbers }) => {
  function renderList() {
    const listItem = [];
    for(let i = 0; i < numbers; i++){
        listItem.push(<li key={i}>element: {i + 1}</li>)
    }
    return listItem
  }
  return <ul>{renderList()}</ul>;
};
