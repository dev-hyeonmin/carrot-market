import TabBar from "@/components/tab-bar"

export default function TabLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full overflow-y-auto">
      {children}
      <TabBar />
    </div>
  )
}