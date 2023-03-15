import FormGroup from "./Bootstrap/FormGroup";
import AwardList from "./Form/Awards/AwardsList";
import EducationList from "./Form/Education/EducationList";
import ExperienceList from "./Form/Experience/ExperienceList";
import InterestList from "./Form/Interests/InterestList";
import SkillsList from "./Form/Skills/SkillsList";

const Details = ({ FormData, onChange }) => {
  const Desc = {
    FullName: [
      "text",
      "Full Name",
      "This is your full name. This has been generated using your first and last name.",
    ],
    FirstName: ["text", "First Name", "Please enter your first name."],
    LastName: ["text", "Last Name", "Please enter your last name."],
    Thubmnail: [
      "text",
      "Your Photo",
      "Please upload your photo in a CDN (Ex. Imgur) and paste the direct image URL here.",
    ],
    URL: [
      "text",
      "Website link",
      "Please enter the URL of your website after hosting your portfolio..",
    ],
    Description: [
      "text",
      "About you",
      "Please enter something about yourself.",
    ],
    Keywords: [
      "text",
      "Keywords",
      "Please enter some keywords to be used for searching your portfolio. ",
    ],
    Address: ["text", "Where are you?", "Please enter your full address."],
    Phone: ["text", "Phone Number", "Please enter your phone number."],
    Email: ["text", "Email Address", "Please enter your primary email address"],
    Colour: [
      "color",
      "Theme Colour",
      "Please choose the colour for your portfolio",
    ],
  };
  return (
    <div className="Form">
      <h3>Basic Info</h3>
      {Object.keys(FormData).map(
        (fd) =>
          Object.keys(Desc).includes(fd) && (
            <FormGroup
              key={fd}
              Label={Desc[fd][1]}
              Type={Desc[fd][0]}
              Id={fd}
              Desc={Desc[fd][2]}
              Value={FormData[fd]}
              Placeholder={`Enter something for ${Desc[fd][1]}`}
              onChange={fd === "FullName" ? () => {} : onChange}
              readOnly={fd === "FullName" ? true : undefined}
            />
          )
      )}
      <h3>Experience</h3>
      <ExperienceList />
      <h3>Education</h3>
      <EducationList />
      <h3>Skills</h3>
      <SkillsList />
      <h3>Interests</h3>
      <InterestList />
      <h3>Awards</h3>
      <AwardList />
    </div>
  );
};

export default Details;
