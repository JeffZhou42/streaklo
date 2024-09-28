import React from 'react';
import { useState } from 'react'
import { Button } from "../components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Home, User, Dumbbell, Book, Coffee, Plus, TrendingUp } from 'lucide-react'

export default function Component() {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Gym', icon: <Dumbbell className="h-4 w-4" /> },
    { id: 2, name: 'Read', icon: <Book className="h-4 w-4" /> },
    { id: 3, name: 'Study', icon: <Coffee className="h-4 w-4" /> },
  ])
  const [friends, setFriends] = useState(['Alice', 'Bob', 'Charlie'])
  const [newHabit, setNewHabit] = useState('')
  const [newFriend, setNewFriend] = useState('')

  const addHabit = () => {
    if (newHabit) {
      setHabits([...habits, { id: habits.length + 1, name: newHabit, icon: <Coffee className="h-4 w-4" /> }])
      setNewHabit('')
    }
  }

  const addFriend = () => {
    if (newFriend) {
      setFriends([...friends, newFriend])
      setNewFriend('')
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <TrendingUp className="h-6 w-6 text-primary" />
        <span className="ml-2 text-2xl font-bold">Streaklo</span>
      </header>
      <Tabs defaultValue="home" className="flex-1">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="user">User</TabsTrigger>
          <TabsTrigger value="habit">Habit</TabsTrigger>
        </TabsList>
        <TabsContent value="home" className="p-4">
          <Card>
            <CardHeader>
              <CardTitle>Habits</CardTitle>
              <CardDescription>Your daily habits</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                {habits.map((habit) => (
                  <div key={habit.id} className="flex items-center space-x-4 mb-4">
                    <div className="bg-primary text-primary-foreground p-2 rounded-full">{habit.icon}</div>
                    <div className="flex-1">{habit.name}</div>
                    <Button variant="outline" size="sm">Track</Button>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
            <CardFooter>
              <Button className="w-full"><Plus className="mr-2 h-4 w-4" /> Add Habit</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="user" className="p-4">
          <Card>
            <CardHeader>
              <CardTitle>User Profile</CardTitle>
              <CardDescription>Your habits and friends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Habits</h3>
                  <ScrollArea className="h-[150px]">
                    {habits.map((habit) => (
                      <div key={habit.id} className="flex items-center space-x-2 mb-2">
                        {habit.icon}
                        <span>{habit.name}</span>
                      </div>
                    ))}
                  </ScrollArea>
                  <div className="flex mt-2">
                    <Input
                      placeholder="New habit"
                      value={newHabit}
                      onChange={(e) => setNewHabit(e.target.value)}
                      className="flex-1 mr-2"
                    />
                    <Button onClick={addHabit}>Add</Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Friends</h3>
                  <ScrollArea className="h-[150px]">
                    {friends.map((friend, index) => (
                      <div key={index} className="mb-2">{friend}</div>
                    ))}
                  </ScrollArea>
                  <div className="flex mt-2">
                    <Input
                      placeholder="New friend"
                      value={newFriend}
                      onChange={(e) => setNewFriend(e.target.value)}
                      className="flex-1 mr-2"
                    />
                    <Button onClick={addFriend}>Add</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="habit" className="p-4">
          <Card>
            <CardHeader>
              <CardTitle>Gym</CardTitle>
              <CardDescription>Track your gym habit</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label>Goal</Label>
                  <div>Go to gym 5 times a week, nudging friends</div>
                </div>
                <div className="space-y-2">
                  <Label>Streak</Label>
                  <div className="grid grid-cols-5 gap-2">
                    {[10, 20, 30, 50, 70].map((day, index) => (
                      <div key={index} className="text-center">
                        <div className="font-semibold">{day}</div>
                        <div className="text-sm text-muted-foreground">days</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Label>Your streak and place</Label>
                  <div className="font-semibold">3 days - 4th place</div>
                </div>
                <div>
                  <Label>Highest streak friends</Label>
                  <div>Alice - 7 days</div>
                  <div>Bob - 5 days</div>
                  <div>Charlie - 4 days</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Track Today</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}