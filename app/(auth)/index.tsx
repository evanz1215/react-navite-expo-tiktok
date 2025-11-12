import { Link, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function AuthScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold text-black">Login</Text>
      <Link href="/(tabs)" className="mt-5 text-blue-500">
        Home
      </Link>

      {/* 按鈕會有opacity效果 */}
      <TouchableOpacity
        className="rounded-xl bg-black p-4"
        onPress={() => router.push("/(tabs)")}
      >
        <Text className="text-lg font-bold text-white">This is a button</Text>
      </TouchableOpacity>
    </View>
  );
}
