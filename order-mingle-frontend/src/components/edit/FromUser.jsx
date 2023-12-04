const FromUser = ({ editData }) => {
  const {
    userId,
    username,
    fullName,
    age,
    photo,
    email,
    isActive,
    hobbies,
    address,
  } = editData;
  console.log(editData);
  return <div>FromUser</div>;
};

export default FromUser;
