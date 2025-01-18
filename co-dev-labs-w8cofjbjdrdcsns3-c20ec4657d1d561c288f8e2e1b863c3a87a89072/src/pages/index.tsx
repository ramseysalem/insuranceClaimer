import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wildfire Insurance Claim Assistant</title>
        <meta name="description" content="Simplify your wildfire insurance claim process with our guided inventory and documentation tool." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <h1 className="text-4xl font-bold text-primary">Simplify Your Wildfire Insurance Claims</h1>
              <p className="text-xl text-muted-foreground">
                A guided, collaborative tool to help you document and file your insurance claim
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/signup">
                  <Button size="lg" className="text-lg">
                    Get Started
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="lg" variant="outline" className="text-lg">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Guided Inventory Creation
                  </CardTitle>
                  <CardDescription>
                    Room-by-room checklists help you remember and document your belongings systematically
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Documentation Assistant
                  </CardTitle>
                  <CardDescription>
                    Easy tools to find and upload receipts, photos, and purchase history from various sources
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Multi-User Collaboration
                  </CardTitle>
                  <CardDescription>
                    Work together with family members or roommates to create a complete inventory
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Privacy & Accessibility
                  </CardTitle>
                  <CardDescription>
                    Multiple language support, photo privacy tools, and accessible interface for all users
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* CTA Section */}
            <Card className="text-center p-8">
              <CardHeader>
                <CardTitle className="text-2xl">Ready to Start Your Claim?</CardTitle>
                <CardDescription className="text-lg">
                  Join thousands of others who have simplified their insurance claim process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/signup">
                  <Button size="lg" className="text-lg">
                    Create Your Account
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}