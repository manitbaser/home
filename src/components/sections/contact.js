import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
// import { StaticImage } from 'gatsby-plugin-image';

const StyledContactSection = styled.section`
  ${'' /* max-width: 900px; */}
  margin: 0 auto 100px;
  text-align: center;

  .inner {
    ${
  '' /* display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 50px; */
}

    @media (max-width: 768px) {
      display: block;
    }
  }

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <div className="inner">
        {/* <div> */}
        <h2 className="numbered-heading overline">What’s Next?</h2>

        <h2 className="title">Get In Touch</h2>

        <p>
          If you have made it this far, I would love to get to know you as well. Let us connect!
          <br />
          My inbox is always open. Whether you have a question or just want to say hi, I’ll try my
          best to get back to you!
        </p>

        <a className="email-link" href={`mailto:${email}`}>
          Say Hello
        </a>
        {/* </div> */}
        {/* <StaticImage
          className="img"
          src="../../images/logo.svg"
          width={500}
          quality={95}
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="Headshot"
        /> */}
      </div>
    </StyledContactSection>
  );
};

export default Contact;
