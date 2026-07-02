import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/lib/contexts";
import { fonts, fontSize, spacing } from "@/blocks/theme";

export default function HomeScreen() {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
      edges={["bottom"]}
    >
      <View style={styles.content}>
        <Text
          style={[
            styles.heading,
            { color: colors.heading, fontFamily: fonts.serif.bold },
          ]}
        >
          Home
        </Text>
        <Text
          style={[
            styles.body,
            { color: colors.body, fontFamily: fonts.sans.regular },
          ]}
        >
          Welcome to your new app. Start building something great.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.lg,
  },
  heading: {
    fontSize: fontSize["3xl"],
    marginBottom: spacing.sm,
  },
  body: {
    fontSize: fontSize.base,
    textAlign: "center",
    lineHeight: 24,
  },
});
