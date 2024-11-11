// src/pages/About.js
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero";
import image from "../assets/about_us.jpg";

const teamMembers = [
  {
    name: "Santosh Paigude",
    designation: "CEO",
    contact: "123-456-7890",
    email: "santosh@otswoodcraft.com",
  },
  {
    name: "Vishhal Saraf",
    designation: "Director",
    contact: "123-456-7891",
    email: "vishhal@otswoodcraft.com",
  },
  {
    name: "Dilip Patel",
    designation: "Factory Management Head",
    contact: "123-456-7892",
    email: "dilip@otswoodcraft.com",
  },
  {
    name: "Vikash Dorle",
    designation: "HOD",
    contact: "123-456-7893",
    email: "vikash@otswoodcraft.com",
  },
  {
    name: "Soniya Saraf",
    designation: "Head Sales & Marketing",
    contact: "123-456-7894",
    email: "soniya@otswoodcraft.com",
  },
  {
    name: "Nilesh Malviy",
    designation: "Sales Manager",
    contact: "123-456-7895",
    email: "nilesh@otswoodcraft.com",
  },
];

const About = () => {
  const teamRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    teamRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <AboutContainer className="page section section-center">
        <img src={image} alt="about us" />
        <ContentWrapper>
          <article>
            <div className="title">
              <h2>Our team</h2>
              <div className="underline"></div>
              <br />
              <p>
                Our dedicated team is committed to delivering excellence and
                quality in every aspect of our work.
              </p>
            </div>
            <TeamContainer>
              {teamMembers.map((member, index) => (
                <TeamCard
                  key={index}
                  ref={(el) => (teamRef.current[index] = el)}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <h3>{member.name}</h3>
                  <p>{member.designation}</p>
                  <table>
                    <tbody>
                      <tr>
                        <th>Contact:</th>
                        <td>{member.contact}</td>
                      </tr>
                      <tr>
                        <th>Email:</th>
                        <td>{member.email}</td>
                      </tr>
                    </tbody>
                  </table>
                </TeamCard>
              ))}
            </TeamContainer>
          </article>
        </ContentWrapper>
      </AboutContainer>
    </main>
  );
};

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: 500px;
    object-fit: cover;
    border-radius: var(--radius);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem; /* Prevents overflow on small screens */

  .title {
    position: relative;
    margin-bottom: 1rem;
  }

  .underline {
    width: 50px;
    height: 4px;
    background-color: red;
    margin: 0 auto;
    margin-top: 10px;
  }

  p {
    max-width: 800px; /* Limit width for better readability */
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const TeamContainer = styled.div`
  display: grid;
  gap: 2rem;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TeamCard = styled.div`
  background: #ffffff;
  border-radius: var(--radius);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  transform: translateY(20px);
  opacity: 0;
  transition: transform 0.5s ease, opacity 0.5s ease;
  will-change: transform, opacity;

  &.fade-in {
    transform: translateY(0);
    opacity: 1;
  }

  h3 {
    margin-bottom: 0.5rem;
    color: var(--clr-primary-5);
    font-size: 1.5rem;
  }

  p {
    color: var(--clr-grey-3);
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  table {
    width: 100%;
    margin-top: 0.5rem;

    th {
      text-align: right;
      color: var(--clr-grey-5);
      font-weight: normal;
      padding-right: 0.5rem;
      font-size: 1rem;
    }

    td {
      text-align: left;
      color: var(--clr-grey-2);
      font-size: 1rem;
    }
  }
`;

export default About;
