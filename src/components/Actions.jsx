import { FaRegComment, FaRegHeart, FaRetweet, FaShare } from 'react-icons/fa'

const Actions = () => {
  return (
    <div className="actions">
      {/* I like using react-icons components better 😁 */}
      <FaRegComment />
      <FaRetweet />
      <FaRegHeart />
      <FaShare />
    </div>
  )
}

export default Actions
