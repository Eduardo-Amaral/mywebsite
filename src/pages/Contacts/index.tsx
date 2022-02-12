import ContactCard from "components/ContactCard";
import { contact_1,contact_2,contact_3,contact_4 } from "types/contacts";

function Contacts() {
  return (
    <div className="container">
      <br /><br />
      <br /><br /><br /><br />
      <div className="row">
        <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3 mb-4">
          <ContactCard  title={contact_1.title} image={contact_1.image} link={contact_1.link} />
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3  mb-4">
          <ContactCard  title={contact_2.title} image={contact_2.image} link={contact_2.link} />
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3  mb-4">
          <ContactCard  title={contact_3.title} image={contact_3.image} link={contact_3.link} />
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3  mb-4">
          <ContactCard  title={contact_4.title} image={contact_4.image} link={contact_4.link} />
        </div>
      </div>
    </div>
  )
}
export default Contacts;