import { useTheme } from "@/lib/contexts";
import { borderRadius, fonts, fontSize, spacing } from "@/blocks/theme";
import { type BaseToastProps } from "react-native-toast-message";
import { View, Text, StyleSheet } from "react-native";

function SuccessToast({ text1, text2 }: BaseToastProps) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.surface,
          borderColor: colors.success,
          shadowColor: colors.shadow,
        },
      ]}
    >
      <Text
        style={[styles.title, { color: colors.heading }]}
        numberOfLines={1}
      >
        {text1}
      </Text>
      {text2 ? (
        <Text
          style={[styles.message, { color: colors.body }]}
          numberOfLines={2}
        >
          {text2}
        </Text>
      ) : null}
    </View>
  );
}

function ErrorToast({ text1, text2 }: BaseToastProps) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.surface,
          borderColor: colors.error,
          shadowColor: colors.shadow,
        },
      ]}
    >
      <Text
        style={[styles.title, { color: colors.heading }]}
        numberOfLines={1}
      >
        {text1}
      </Text>
      {text2 ? (
        <Text
          style={[styles.message, { color: colors.body }]}
          numberOfLines={2}
        >
          {text2}
        </Text>
      ) : null}
    </View>
  );
}

export const toastConfig = {
  success: (props: BaseToastProps) => <SuccessToast {...props} />,
  error: (props: BaseToastProps) => <ErrorToast {...props} />,
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 4,
    borderRadius: borderRadius.md,
    borderLeftWidth: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontFamily: fonts.sans.semibold,
    fontSize: fontSize.sm,
  },
  message: {
    fontFamily: fonts.sans.regular,
    fontSize: fontSize.xs,
    marginTop: 2,
  },
});
