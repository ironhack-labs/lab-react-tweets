function Actions({ className, id }) {
  return (
    <div>
      <i className={className} data-testid={id}></i>
    </div>
  );
}

export default Actions;
