import React from "react";

const Section = () => {
  return (
    <div>
      <div className="section item-3">
        <h2 className="groups" id="experience">
          Experience
        </h2>
        <table border={1} style={{borderCollapse: "collapse"}}>
          <thead>
            <th>#</th>
            <th>Organization</th>
            <th>Position</th>
            <th>Time</th>
          </thead>
          <tr>
            <td>1</td>
            <td>National Security</td>
            <td>officer</td>
            <td>2014-2017</td>
          </tr>
          <tr>
            <td>2</td>
            <td>ZETA</td>
            <td>sales manager</td>
            <td>2017-2018</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Ritz-Carlton</td>
            <td>security</td>
            <td>2018-2019</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Golden Rill Group</td>
            <td>IT-specialist</td>
            <td>2019-2022</td>
          </tr>
        </table>
      </div>

      <div className="section item-4">
        <h2 className="groups">Skills</h2>
        <ul>
          <li>
            <b>HTML(basic)</b>
          </li>
          <li>
            <b>CSS(basic)</b>
          </li>
          <li>
            <b>JavaScript(basic)</b>
          </li>
        </ul>
      </div>

      <div className="section item-5">
        <h2 className="groups">Education</h2>
        <ol>
          <li>
            <strong>Turan-Astana University</strong>
            <ul>
              <li>
                Bachelor's degree in Information and Communication technologies
              </li>
            </ul>
          </li>
          <li>
            <strong>Academy of national security</strong>
            <ul>
              <li>Bachelor's degree in naitonal security</li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="section item-6">
        <h2 className="groups">Social Networks</h2>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/tayan-bostybaev-091497255/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/tayan.8">Instagramm</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Section;
