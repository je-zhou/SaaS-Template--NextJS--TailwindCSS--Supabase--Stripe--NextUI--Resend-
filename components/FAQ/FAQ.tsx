import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQDemo() {
  return (
    <div className="w-full max-w-3xl space-y-4 flex flex-col items-center px-6">
      <h1 className="text-2xl md:text-3xl lg:text-4xl opacity-65">Have questions?</h1>
      <p className="md:text-lg lg:text-xl opacity-50 text-center">Check out the frequently asked questions below</p>
      <Accordion type="single" collapsible className="opacity-70 pt-12 w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is this template free?</AccordionTrigger>
          <AccordionContent>
            Yep 100% free! All you have to do is clone the Github Repo. 
            I might make this is a paid template in the future and grandfather the current uses, 
            but in the meantime you can make an optional donation if you want to support me 😊.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Seems like a lot of features for a template</AccordionTrigger>
          <AccordionContent>
            Agree that this template is pretty stacked with packages and there is a lot going on. 
            However, the goal of this template is to rapidly build SaaS's ontop of it and launch ASAP.
            Therefore package size and optimising performance is secondary to shipping a really great product really fast.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How can I suggest an improvement/feature</AccordionTrigger>
          <AccordionContent>
            For now this project is fully open source. More than happy for you to email your suggestions to
            my <a href="mailto: jerry.zhou07@gmail.com" className="underline">email</a>, or make a pull request to the Github 
            {" "}<a href="https://github.com/je-zhou/The-Solopreneur-Saas-Template" className="underline">repo</a> directly.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
    
  );
}