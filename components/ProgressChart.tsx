import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

type DonutProgressChartProps = {
  defaultValue: number;
  remaining: number;
  title?: string;
  subtext?: string;
  color?: string;
};

const DonutProgressChart: React.FC<DonutProgressChartProps> = ({
  defaultValue,
  remaining,
  title = "Progress",
  subtext = "",
  color = "#4CAF50",
}) => {
  const radius = 60;
  const strokeWidth = 10;
  const center = radius + strokeWidth;
  const size = center * 2;
  const circumference = 2 * Math.PI * radius;

  const progressRatio = Math.max(0, Math.min(1, remaining / defaultValue));
  const strokeDashoffset = circumference * (1 - progressRatio);

  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        {}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke={colors.border}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
          rotation={-90}
          origin={`${center}, ${center}`}
        />
      </Svg>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.remaining}>{remaining}</Text>
        <Text style={styles.subtext}>{subtext}</Text>
      </View>
    </View>
  );
};

function getStyles(colors: any) {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
    },
    textContainer: {
      position: "absolute",
      alignItems: "center",
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
      color: colors.text,
    },
    remaining: {
      fontSize: 24,
      fontWeight: "bold",
      color: colors.text,
    },
    subtext: {
      fontSize: 12,
      color: colors.text,
    },
  });
}

export default DonutProgressChart;
