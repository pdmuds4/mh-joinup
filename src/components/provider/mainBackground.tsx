import { Center } from "@yamada-ui/react"

export default function MainBackground({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-white bg-gradient-to-br from-red-400 to-orange-400 place-content-center">
            <Center
                p={{sm: 4, md: 8, base: 12}}
                className="min-h-screen"
            >
                {children}
            </Center>
        </div>
    )
}