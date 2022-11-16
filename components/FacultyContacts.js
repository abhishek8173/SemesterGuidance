import * as React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  View,
} from "react-native";
import bg from "../assets/AppBGB.jpg";

export default function FacultyContacts() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <ScrollView>
          <Text style={styles.h1}>Admissions</Text>
          <View>
            <Text style={styles.h2}>Emails:</Text>
            <Text style={styles.paragraph}>
              - admissions@lpu.co.in (Admissions)
            </Text>
            <Text style={styles.paragraph}>
              - int.admissions@lpu.co.in (International Admissions)
            </Text>
            <Text style={styles.paragraph}>- info@lpu.co.in (General)</Text>
            <Text style={styles.h2}>Phone:</Text>
            <Text style={styles.paragraph}>- +91-1824-517000</Text>
            <Text style={styles.paragraph}>- +91-1824-404404</Text>
            <Text style={styles.paragraph}>
              - +91 98525 69000 (Whatsapp Chat)
            </Text>
          </View>
          <Text style={styles.h1}>Office Contacts</Text>
          <View>
            <Text style={styles.h2}>Distance Education</Text>
            <Text style={styles.paragraph}>
              Toll Free: 1800 3001 1800 (Admission Enquiry)
            </Text>
            <Text style={styles.paragraph}>
              Phone: +91-1824-521360 (General Enquiry)
            </Text>
            <Text style={styles.paragraph}>
              Email: odl.admissions@lpu.co.in
            </Text>
            <Text style={styles.paragraph}>Website: http://www.lpude.in</Text>

            <Text style={styles.h2}>International Office</Text>
            <Text style={styles.paragraph}>Phone: +91 1824 444 019</Text>
            <Text style={styles.paragraph}>
              Email: int.admissions@lpu.co.in (Admissions)
            </Text>
            <Text style={styles.paragraph}>
              Email: international@lpu.co.in (General)
            </Text>
            <Text style={styles.paragraph}>
              Website: http://www.lpu.in/international
            </Text>

            <Text style={styles.h2}>
              Division of Career Services:(Placement Cell)
            </Text>
            <Text style={styles.paragraph}>Phone: +91 1824-444500</Text>
            <Text style={styles.paragraph}>Mobile: +91 9915020421</Text>
            <Text style={styles.paragraph}>Email: placement@lpu.co.in</Text>
            <Text style={styles.paragraph}>
              Website: http://www.lpu.in/placements.php
            </Text>

            <Text style={styles.h2}>LPU Alumni Association</Text>
            <Text style={styles.paragraph}>Phone: +91-7508-183833</Text>
            <Text style={styles.paragraph}>Email: alumnicentral@lpu.co.in</Text>
            <Text style={styles.paragraph}>Website: http://alumni.lpu.in</Text>

            <Text style={styles.h2}>Jobs</Text>
            <Text style={styles.paragraph}>Phone: +91-1824-444514</Text>
            <Text style={styles.paragraph}>Phone: +91-75081-83872</Text>
            <Text style={styles.paragraph}>Email: hrd@lpu.co.in</Text>

            <Text style={styles.h2}>Media</Text>
            <Text style={styles.paragraph}>Phone: +91-1824-444008</Text>
            <Text style={styles.paragraph}>Email: aman.mittal@lpu.co.in</Text>
            <Text style={styles.paragraph}>Email: media@lpu.co.in</Text>
          </View>
          <View style={styles.empty}></View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  h2: {
    margin: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  h1: {
    fontSize: 32,
    marginTop: 20,
    textAlign: "center",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  paragraph: {
    fontSize: 14,
    marginLeft: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  image: {
    flex: 1,
    //marginTop: Platform.OS == 'android' ? 0 : 10,
    //justifyContent: 'center',
    //padding: 10,
  },
  empty: {
    margin: 20,
  },
});
