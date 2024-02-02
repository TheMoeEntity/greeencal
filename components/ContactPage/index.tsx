"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import styles from "./index.module.css";
import { useResize } from "@/Helpers/hooks";

const ContactPage = () => {
  const { val, setVal, textAreaRef } = useResize();

  const [status, setStatus] = useState("Submit");

  return (
    <div className={styles.contactForm}>
      <div className={styles.form}>
        <div className={styles.left}>
          <div>
            <h1>Get in Touch</h1>
            <p>
              To purchase or request a demo for either of our products and
              services, please fill in the form or reach us via:
            </p>
            <ul>
              <li>
                <i className="fa fa-angle-right"></i>
                <i className="fa-solid fa-phone"></i>
                <a
                  target={`_blank`}
                  rel="noopener noreferrer"
                  href="https://wa.me/+2349169126429"
                >
                  (+234) 916 912 6429
                </a>
              </li>
              <li>
                <i className="fa fa-angle-right"></i>
                <i className="fa-solid fa-envelope"></i>

                <a
                  target={`_blank`}
                  rel="noopener noreferrer"
                  href="mailto:biz@greencal.com"
                >
                  biz@greencal.com
                </a>
              </li>
            </ul>
            <p>
              For general enquiries and to speak directly with an expert kindly
              reach us via:
            </p>
            <button>
              <a
                target={`_blank`}
                rel="noopener noreferrer"
                href="mailto:info@greencal.com"
              >
                info@greencal.com
              </a>
            </button>
            <h3>Head Office:</h3>
            <div>
              <i className="fa-solid fa-building"></i>
              Abakaliki, Ebonyi State, Nigeria.
            </div>
            <br />
            <div className={styles.maps}>
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=ikoyi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <form
          // onSubmit={(e) =>
          //   Helpers.handleSubmit(
          //     setStatus,
          //     setUserFile,
          //     setVal,
          //     setCurrFile,
          //     policyRef,
          //     currFile,
          //     val,
          //     e,
          //     userFile,
          //     enqueueSnackbar
          //   )
          // }
          >
            {/* <h1>Contact Details</h1> */}
            <div className={styles.formGroup}>
              <label htmlFor="">Full Name:</label>
              <input type="text" name="" id="" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="">Email:</label>
              <input type="text" name="" id="" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="">Phone:</label>
              <input type="text" name="" id="" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="">Interested Service:</label>
              <select className="custom-select" style={{ width: "100%" }}>
                <option>--Choose--</option>
                <option>Donation</option>
                <option>Support</option>
                <option>Grants</option>
              </select>
            </div>
            {/* <div className={styles.formGroup}>
              <label htmlFor="">Industry:</label>
              <select
                className="custom-select"
                style={{ width: "100%" }}
                onChange={onOptionChangeHandler}
              >
                <option>--Choose--</option>
                <option>Transportation </option>
                <option>Real Estate </option>
                <option>Government </option>
                <option>Energy</option>
                <option>Hospitality & Tourism</option>
                <option>Health Care</option>
                <option>Information Technology</option>
                <option>Financial Services</option>
                <option>Wholesale & Retail</option>
                <option>Public Utilities</option>
                <option>Construction</option>
                <option>Manufacturing</option>
                <option>Agriculture</option>
                <option>Others</option>
              </select>
            </div> */}
            <div className={styles.formGroup}>
              <textarea
                className={styles.textArea}
                placeholder="Message"
                name=""
                id=""
                cols={10}
                ref={textAreaRef}
                value={val}
                onChange={(e) => setVal(e.target.value)}
                rows={1}
              ></textarea>
            </div>
            {/* <div className={styles.formGroup}>
              <label htmlFor="">Attach File:</label>
              <i onClick={openFiles} className="fas fa-file"></i>
              {currFile}
            </div> */}
            {/* 
            <input
              onChange={(e) =>
                Helpers.handleFileSelected(
                  e,
                  enqueueSnackbar,
                  setSize,
                  setUserFile,
                  setCurrFile,
                  size
                )
              }
              type="file"
              id="file"
              ref={inputFile}
              style={{ display: "none" }}
            /> */}

            <div className={styles.formGroup}>
              <button type="submit">
                {status !== "Submit" && (
                  <i
                    className={`fa fa-spinner ${styles.spinning}`}
                    aria-hidden="true"
                  ></i>
                )}
                {status}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
