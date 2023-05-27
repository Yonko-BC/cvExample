// import React from "react";
// import {
//   Document,
//   Page,
//   Text,
//   View,
//   StyleSheet,
//   Image,
//   PDFViewer,
// } from "@react-pdf/renderer";

// const styles = StyleSheet.create({
//   page: {
//     fontFamily: "Helvetica",
//     fontSize: 12,
//     padding: 20,
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   section: {
//     marginBottom: 10,
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "flex-start",
//   },
//   sectionTitle: {
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   photo: {
//     marginBottom: 10,
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//   },
//   contactInfo: {
//     marginBottom: 10,
//     display: "flex",
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   contactInfoItem: {
//     marginRight: 10,
//     marginBottom: 5,
//   },
//   education: {
//     marginBottom: 10,
//   },
//   educationItem: {
//     marginBottom: 5,
//   },
//   experience: {
//     marginBottom: 10,
//   },
//   experienceItem: {
//     marginBottom: 5,
//   },
//   skills: {
//     marginBottom: 10,
//     display: "flex",
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   skillsItem: {
//     marginRight: 5,
//     marginBottom: 5,
//     paddingVertical: 2,
//     paddingHorizontal: 6,
//     backgroundColor: "#E4E4E4",
//     borderRadius: 5,
//   },
// });

// const CVDocument = ({ c }) => {
//   return (
//     <Document>
//     <Page style={styles.page}>
//       {/* CV */}
//       <View style={styles.section}>
//         <Image style={styles.photo} src={c.photo_url} />
//         <View style={styles.contactInfo}>
//           <Text style={styles.sectionTitle}>Contact Information</Text>
//           {Object.entries(c.contact_info).map(([key, value]) => (
//             <Text key={key} style={styles.contactInfoItem}>
//               {`${key}: ${value}`}
//             </Text>
//           ))}
//         </View>
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Personal Information</Text>
//           <Text>{`Name: ${c.first_name} ${c.last_name}`}</Text>
//           <Text>{`Country: ${c.country}`}</Text>
//           <Text>{`State: ${c.state}`}</Text>
//           <Text>{`Email: ${c.email}`}</Text>
//           <Text>{`Mobile: ${c.mobile}`}</Text>
//           <Text>{`LinkedIn: ${c.linkedin_url}`}</Text>
//         </View>
//       </View>
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Education</Text>
//         {c.educations.map((education, index) => (
//           <View key={index} style={styles.educationItem}>
//             <Text>{`${education.institute_school}`}</Text>
//             <Text>{`${education.degree} in ${education.major_department}`}</Text>
//             <Text>{`Duration: ${education.duration.start.month} ${education.duration.start.year} - ${education.duration.end.month} ${education.duration.end.year}`}</Text>
//           </View>
//         ))}
//       </View>
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Experience</Text>
//         {c.experiences.map((experience, index) => (
//           <View key={index} style={styles.experienceItem}>
//             <Text>{`${experience.company}`}</Text>
//             <Text>{`${experience.occupation_title}`}</Text>
//             <Text>{`${experience.summary}`}</Text>
//             <Text>{`Duration: ${experience.work_duration.start.month} ${experience.work_duration.start.year} - ${experience.work_duration.end.month} ${experience.work_duration.end.year}`}</Text>
//           </View>
//         ))}
//       </View>
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Skills</Text>
//         <View style={styles.skills}>
//           {c.skills.map((skill, index) => (
//             <View key={index} style={styles.skillsItem}>
//               <Text>{skill}</Text>
//             </View>
//           ))}
//         </View>
//       </View>
//     </Page>
//   </Document>
//   );
// };

// const PDFGenerator = () => {
//   const c = {
//     contact_info: {
//       skype: "Jhon Doe",
//       site: "Jhon-Doe",
//       telegram: "Jhon-Doe",
//       twitter: "Jhon-Doe",
//     },
//     country: "Morocco",
//     current_position: "Software Engineer",
//     domains: "Software Engineering",
//     email: "John23@gmail.com",
//     expected_salary: 10000,
//     expyrs: 2,
//     first_name: "John",
//     last_name: "Doe",
//     linkedin_url: "https://www.linkedin.com/in/john-doe-123456789/",
//     mobile: "+212 6 12 34 56 78",
//     notes:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse",
//     photo_url: "https://i.pravatar.cc/300",
//     state: "Rabat-Salé-Kénitra",
//     current_salary: 10000,
//     skills: [
//       "React",
//       "Node",
//       "Express",
//       "MongoDB",
//       "JavaScript",
//       "HTML",
//       "CSS",
//       "Python",
//       "Java",
//       "C++",
//     ],
//     educations: [
//       {
//         duration: {
//           start: { month: "Jan", year: 2020 },
//           end: { month: "April", year: 2021 },
//         },
//         institute_school: "University of Science and Technology",
//         degree: "Master of Science",
//         major_department: "Computer Science",
//       },
//       {
//         duration: {
//           start: { month: "Jan", year: 2016 },
//           end: { month: "April", year: 2019 },
//         },
//         institute_school: "University of Science and Technology",
//         degree: "Bachelor of Science",
//         major_department: "Computer Science",
//       },
//       {
//         duration: {
//           start: { month: "Jan", year: 2014 },
//           end: { month: "April", year: 2016 },
//         },
//         institute_school: "University of Science and Technology",
//         degree: "Associate of Science",
//         major_department: "Computer Science",
//       },
//     ],

//     experiences: [
//       {
//         work_duration: {
//           start: { month: "Jan", year: 2020 },
//           end: { month: "April", year: 2021 },
//         },
//         company: "Google",
//         occupation_title: "Software Engineer",
//         summary:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse",
//       },
//       {
//         work_duration: {
//           start: { month: "Jan", year: 2016 },
//           end: { month: "April", year: 2019 },
//         },
//         company: "Facebook",
//         occupation_title: "Software Engineer",
//         summary:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse",
//       },
//       {
//         work_duration: {
//           start: { month: "Jan", year: 2014 },
//           end: { month: "April", year: 2016 },
//         },
//         company: "Amazon",
//         occupation_title: "Software Engineer",
//         summary:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse",
//       },
//     ],
//   };

//   const RenderPDFButton = ({ document }) => {
//     const [showPDF, setShowPDF] = React.useState(false);

//     const handleTogglePDF = () => {
//       setShowPDF(!showPDF);
//     };

//     if (showPDF) {
//       return (
//         <PDFViewer style={{ width: "100%", height: "100vh" }}>
//           {document}
//         </PDFViewer>
//       );
//     }

//     return (
//       <div>
//         <button onClick={handleTogglePDF}>View CV</button>
//       </div>
//     );
//   };

//   return <RenderPDFButton document={<CVDocument c={c} />} />;
// };

// export default PDFGenerator;
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  PDFViewer,
} from "@react-pdf/renderer";
const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    padding: 40,
    flexDirection: "row",
  },
  column: {
    width: "30%",
    paddingRight: 20,
  },



  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 10,
    textDecoration: "underline",
    color: "red",
  },
  sectionContent: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  line: {
    marginTop: 5,
    marginBottom: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: "#000",
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
    borderColor: "blue",
  },
  contactInfo: {
    marginBottom: 10,
  },
  contactInfoItem: {
    marginBottom: 5,
  },
  education: {
    marginBottom: 10,
  },
  educationItem: {
    marginBottom: 5,
  },
  experience: {
    marginBottom: 10,
  },
  experienceItem: {
    marginBottom: 5,
  },
  skills: {
    marginBottom: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillsItem: {
    marginRight: 5,
    marginBottom: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#E4E4E4",
    borderRadius: 5,
  },
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "red",
  },
  

  
});

const CVDocument = ({ c }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Left Column */}
        <View style={styles.column}>
          <View style={styles.section}>
            <View style={styles.sectionContent}>
              <Image style={styles.photo} src={{ uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxtDZAvImObxjDKS11-n0-BwpvuEEZbiIYC3qbUAorUHLBf7yz8THOXt5v67PNtv6anpE&usqp=CAU", method: 'GET', headers: {}, body: '' }} />
              <View>
                <Text style={styles.sectionTitle}>Contact Information</Text>
                <View style={styles.contactInfo}>
                  {Object.entries(c.contact_info).map(([key, value]) => (
                    <Text key={key} style={styles.contactInfoItem}>
                      {`${key}: ${value}`}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            <Text>{`Name: ${c.first_name} ${c.last_name}`}</Text>
            <Text>{`Country: ${c.country}`}</Text>
            <Text>{`State: ${c.state}`}</Text>
            <Text>{`Email: ${c.email}`}</Text>
            <Text>{`Mobile: ${c.mobile}`}</Text>
            <Text>{`LinkedIn: ${c.linkedin_url}`}</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skills}>
              {c.skills.map((skill, index) => (
                <View key={index} style={styles.skillsItem}>
                  <Text>{skill}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Right Column */}
        <View style={{
          width: "65%",
          paddingLeft: 20,
           }}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {c.educations.map((education, index) => (
              <View key={index} style={styles.educationItem}>
                <Text style={{
                  fontSize: 14,
                  marginBottom: 10,
                  color: "blue",


                }}>{`${education.institute_school}`}</Text>
                <Text>{`${education.degree} in ${education.major_department}`}</Text>
                <Text>{`Duration: ${education.duration.start.month} ${education.duration.start.year} - ${education.duration.end.month} ${education.duration.end.year}`}</Text>
              </View>
            ))}
          </View>
          <View style={styles.line} />
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {c.experiences.map((experience, index) => (
              <View key={index} style={styles.experienceItem}>
                <Text
                  style={{
                    fontSize: 14,
                    marginBottom: 10,
                    color: "blue",
                  }}
                >{`${experience.company}`}</Text>
                <Text>{`${experience.occupation_title}`}</Text>
                <Text>{`${experience.summary}`}</Text>
                <Text>{`Duration: ${experience.work_duration.start.month} ${experience.work_duration.start.year} - ${experience.work_duration.end.month} ${experience.work_duration.end.year}`}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

const PDFGenerator = () => {

  const c = {
    contact_info: {
      skype: "Jhon Doe",
      site: "Jhon-Doe",
      telegram: "Jhon-Doe",
      twitter: "Jhon-Doe",
    },
    country: "Morocco",
    current_position: "Software Engineer",
    domains: "Software Engineering",
    email: "John23@gmail.com",
    expected_salary: 10000,
    expyrs: 2,
    first_name: "John",
    last_name: "Doe",
    linkedin_url: "https://www.linkedin.com/in/john-doe-123456789/",
    mobile: "+212 6 12 34 56 78",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse",
    photo_url: "https://i.pravatar.cc/300",
    state: "Rabat-Salé-Kénitra",
    current_salary: 10000,
    skills: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "JavaScript",
      "HTML",
      "CSS",
      "Python",
      "Java",
      "C++",
      "fghjkertyuixcvbnmfghj"
    ],
    educations: [
      {
        duration: {
          start: { month: "Jan", year: 2020 },
          end: { month: "April", year: 2021 },
        },
        institute_school: "University of Science and Technology",
        degree: "Master of Science",
        major_department: "Computer Science",
      },
      {
        duration: {
          start: { month: "Jan", year: 2020 },
          end: { month: "April", year: 2021 },
        },
        institute_school: "University of Science and Technology",
        degree: "Master of Science",
        major_department: "Computer Science",
      }, {
        duration: {
          start: { month: "Jan", year: 2020 },
          end: { month: "April", year: 2021 },
        },
        institute_school: "University of Science and Technology",
        degree: "Master of Science",
        major_department: "Computer Science",
      }, {
        duration: {
          start: { month: "Jan", year: 2020 },
          end: { month: "April", year: 2021 },
        },
        institute_school: "University of Science and Technology",
        degree: "Master of Science",
        major_department: "Computer Science",
      }, {
        duration: {
          start: { month: "Jan", year: 2020 },
          end: { month: "April", year: 2021 },
        },
        institute_school: "University of Science and Technology",
        degree: "Master of Science",
        major_department: "Computer Science",
      }, {
        duration: {
          start: { month: "Jan", year: 2020 },
          end: { month: "April", year: 2021 },
        },
        institute_school: "University of Science and Technology",
        degree: "Master of Science",
        major_department: "Computer Science",
      },
      {
        duration: {
          start: { month: "Jan", year: 2016 },
          end: { month: "April", year: 2019 },
        },
        institute_school: "University of Science and Technology",
        degree: "Bachelor of Science",
        major_department: "Computer Science",
      },
      {
        duration: {
          start: { month: "Jan", year: 2014 },
          end: { month: "April", year: 2016 },
        },
        institute_school: "University of Science and Technology",
        degree: "Associate of Science",
        major_department: "Computer Science",
      },
    ],

    experiences: [
      {
        work_duration: {
          start: { month: "Jan", year: 2020 },
          end: { month: "April", year: 2021 },
        },
        company: "Google",
        occupation_title: "Software Engineer",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse",
      },
      {
        work_duration: {
          start: { month: "Jan", year: 2016 },
          end: { month: "April", year: 2019 },
        },
        company: "Facebook",
        occupation_title: "Software Engineer",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse",
      },
      {
        work_duration: {
          start: { month: "Jan", year: 2014 },
          end: { month: "April", year: 2016 },
        },
        company: "Amazon",
        occupation_title: "Software Engineer",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse",
      },
    ],
  };

  const RenderPDFButton = ({ document }) => {
    const [showPDF, setShowPDF] = React.useState(false);

    const handleTogglePDF = () => {
      setShowPDF(!showPDF);
    };

    if (showPDF) {
      return (
        <PDFViewer style={{ width: "100%", height: "100vh" }}>
          {document}
        </PDFViewer>
      );
    }

    return (
      <div>
        <button onClick={handleTogglePDF}>View CV</button>
      </div>
    );
  };

  return <RenderPDFButton document={<CVDocument c={c} />} />;
};

export default PDFGenerator;
