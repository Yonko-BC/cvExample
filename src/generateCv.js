import React from "react";
import { Document, Page, Text, View, StyleSheet , Image, PDFViewer  } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 12,
    padding: 20,
    display: "flex",
    flexDirection: "column",
  },
  section: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    flexGrow: 2,
  },
  name: {
    fontSize: 28,
    paddingBottom: 5,
  },
  header: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flexGrow: 1,
  },
  form: {
    fontSize: 16,
    marginBottom: 5,
    color: "white",
    backgroundColor: "yellow",
  },
  exp: {
    fontSize: 16,
    marginBottom: 5,
    color: "red",
    backgroundColor: "#688547",
  },
  heading: {
    fontSize: 16,
    marginBottom: 5,
    color: "#688547",
  },
  subHeading: {

    fontSize: 14,
    marginBottom: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

const CVDocument = ({c}) => {

  return (
    <Document>
    <Page style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>{c.first_name} {c.last_name}</Text> 
        <Text style={styles.title}>{c.current_position}</Text> 
      </View>
      <View style={styles.section}>
        <View style={styles.form}>
          <Text>2</Text>
        </View>
        <View style={styles.exp}>
          <Text>3</Text>
        </View>
      </View>

      {/* <View style={styles.section}>
        <View style={styles.section}>
          <Image src={{ uri: "https://i.pravatar.cc/300", method: 'GET', headers: {}, body: '' }} style={styles.avatar} />
          <Text style={styles.heading}>Personal Information</Text>
          <Text style={styles.subHeading}>Name: {c.first_name} {c.last_name}</Text>
          <Text style={styles.subHeading}>Email: {c.email}</Text>
          <Text style={styles.subHeading}>Phone: {c.mobile}</Text>
          <Text style={styles.subHeading}>Address: {c.country}</Text>
        </View>
        <Text style={styles.heading}>Education</Text>
        {c.educations.map((education, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.subHeading}>{education.institute_school}</Text>
            <Text>{education.degree} in {education.major_department}</Text>
            <Text>Duration: {education.duration.start.month} {education.duration.start.year} - {education.duration.end.month} {education.duration.end.year}</Text>
          </View>
        ))}

        <Text style={styles.heading}>Experience</Text>
        {c.experiences.map((experience, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.subHeading}>{experience.occupation_title} at {experience.company}</Text>
            <Text>{experience.summary}</Text>
            <Text>Duration: {experience.work_duration.start.month} {experience.work_duration.start.year} - {experience.work_duration.end.month} {experience.work_duration.end.year}</Text>
          </View>
        ))}

      </View> */}
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
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse",
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
        <PDFViewer style={{ width: '100%', height: '100vh' }}>
          {document}
        </PDFViewer>
      );
    }

    return (
      <div>
        <button onClick={handleTogglePDF}>
        
          View CV
        </button>
     
      </div>
    );
  };

  return (
    <RenderPDFButton document={<CVDocument c={c} />} />
  );
};

export default PDFGenerator;