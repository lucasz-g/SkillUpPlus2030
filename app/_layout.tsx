import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Tela de Login/Inicial (Stack) */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* O grupo (drawer) será a tela principal após o login */}
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
    </Stack>
  );
}
