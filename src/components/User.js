function User(props) {

    return (
<div>
<span className="user">
  <span className={props.user.name}> USER_NAME </span>
  <span className={props.user.handle}>@ USER_HANDLE</span>
</span>
</div>

    );
}