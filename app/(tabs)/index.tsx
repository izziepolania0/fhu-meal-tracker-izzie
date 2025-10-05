import { useTheme } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useThemeContext } from "../../components/ThemeContext";

import DonutProgressChart from "@/components/ProgressChart";
import { Text, View } from "@/components/Themed";
import { useState } from "react";
import { ScrollView } from "react-native";

export default function TabOneScreen() {
  const { theme, toggleTheme } = useThemeContext();
  const { colors } = useTheme();

  const [lionBucks, setLionBucks] = useState(200);
  const [mealSwipes, setMealSwipes] = useState(80);
  const [lionsPrideSwipes, setlionsPrideSwipes] = useState(5);
  const [chickfilaSwipes, setChickfilaSwipes] = useState(2);

  const styles = getStyles(colors);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.graphics}>
          <DonutProgressChart
            defaultValue={200}
            remaining={lionBucks}
            title={"Lion Bucks"}
            subtext="/ 200"
            color="goldenrod"
          />
          <DonutProgressChart
            defaultValue={80}
            remaining={mealSwipes}
            title={"Meal Swipes"}
            subtext="/ 80"
            color="darkred"
          />
        </View>

        <View style={styles.swipes}>
          <View>
            <Text style={styles.swipeText}>{lionsPrideSwipes} / 5</Text>
            <Text style={styles.label}>Lion's Pride</Text>
          </View>
          <View>
            <Text style={styles.swipeText}>{chickfilaSwipes} / 2</Text>
            <Text style={styles.label}>Chick-Fil-A</Text>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setMealSwipes(Math.max(mealSwipes - 1, 0))}
          >
            <Text style={styles.buttonText}>Use a Meal Swipe</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setLionBucks(Math.max(lionBucks - 8, 0))}
          >
            <Text style={styles.buttonText}>Buy a drink at Starbucks</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setChickfilaSwipes(Math.max(chickfilaSwipes - 1, 0))}
          >
            <Text style={styles.buttonText}>Eat at Chick-fil-a</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              setlionsPrideSwipes(Math.max(lionsPrideSwipes - 1, 0))
            }
          >
            <Text style={styles.buttonText}>Eat at Lions Pride</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleTheme}>
            <Text style={styles.buttonText}>
              Switch to {theme === "light" ? "Dark" : "Light"} Mode
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

function getStyles(colors: any) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
    graphics: {
      flexDirection: "row",
      backgroundColor: colors.background,
    },
    swipes: {
      flexDirection: "row",
      gap: 75,
      backgroundColor: colors.background,
    },
    swipeText: {
      fontSize: 35,
      padding: 4,
      color: colors.text,
      backgroundColor: colors.background,
    },
    label: {
      color: colors.text,
      backgroundColor: colors.background,
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: "80%",
      backgroundColor: colors.border,
    },
    buttons: {
      flexDirection: "column",
      gap: 25,
      backgroundColor: colors.background,
    },
    button: {
      padding: 25,
      borderRadius: 5,
      backgroundColor: colors.primary,
    },
    buttonText: {
      color: colors.text,
      fontWeight: "bold",
    },
  });
}
