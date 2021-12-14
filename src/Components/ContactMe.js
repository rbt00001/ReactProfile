import React from "react";
function ContactMe() {
  return (
    <main>
      &copy;
      <div classNameName="col-4 col-12-small">
        <ul className="labeled-icons">
          <li>
            <h3 className="icon solid fa-home">
              <span className="label">Address</span>
            </h3>
            2618 Menchaca St. San Antonio Tx, 78228 United States
          </li>

          <li>
            <h3 className="icon solid fa-envelope">
              <span className="label">Email</span>
            </h3>
            <a href="mailto:RBT000011@gmail.com">RBT000011@gmail.com</a>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default ContactMe;
