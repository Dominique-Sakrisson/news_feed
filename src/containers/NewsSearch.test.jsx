import dotenv from 'dotenv';
dotenv.config();
import React, { Component } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsSearch from './NewsSearch';

describe('tests the NewsSearch Container', () => {
  it('displays a list of news articles', async () => {
    render(<NewsSearch />);

    screen.getByText('Loading...');

    const input = await screen.findByLabelText('Search for article mentions');
    userEvent.type(input, 'Ford');

    const submitButton = await screen.findByRole('button', {
      name: 'search-articles',
    });
    userEvent.click(submitButton);

    return waitFor(() => {
      const articles = screen.getAllByText('Ford', { exact: false });
      expect(articles).toHaveLength(29);
      expect(articles).toMatchInlineSnapshot(`
        Array [
          <h1>
            Ford will reveal the F-150 Lighting EV on May 19th
          </h1>,
          <p>
            After years of showing off prototypes, Ford will finally detail a consumer version of its upcoming electric F-150 truck.
          </p>,
          <h1>
            Ford is adding 'hands-free' Alexa to new cars with an OTA update
          </h1>,
          <p>
            Starting this fall, Ford will begin rolling out an improved implementation of Alexa to Sync 4-equipped cars in the US and Canada..
          </p>,
          <h1>
            Ford reveals three new details about its officially named F-150 Lightning electric pickup truck
          </h1>,
          <p>
            Ford confirmed Monday that its all-electric pickup truck will be named the F-150 Lightning, resurrecting a name that once donned the SVT F-150 in the 1990s. The company hasn’t said much about the powertrain, range or other specs. However, Ford President and C…
          </p>,
          <h1>
            Ford, BMW lead Solid Power’s $130M Series B round
          </h1>,
          <p>
            The actress opens up about her new roles, including Betty Ford and a new fragrance.
          </p>,
          <h1>
            Ford adds Alexa voice assistant to new cars
          </h1>,
          <p>
            “Alexa, what’s the traffic like on my commute?”
        That's something you'll soon be able to ask in Ford's newest cars, including the upcoming electric F-150 Lightning pickup and first electric Mustang Mach-E. 
        On Thursday, the Michigan-based company announced tha…
          </p>,
          <h1>
            Ford takes aim at Tesla, GM with its new hands-free driving system
          </h1>,
          <p>
            Ford will debut its new hands-free driving feature on the 2021 F-150 pickup truck and certain 2021 Mustang Mach-E models through a software update later this year, technology that the automaker developed to rival similar systems from Tesla and GM. That hands-…
          </p>,
          <h1>
            Argo’s new lidar sensor could help Ford, VW deploy self-driving vehicles at scale
          </h1>,
          <h1>
            Ford reveals name of its first electric pickup truck
          </h1>,
          <p>
            Ford will livestream the launch of its first electric F-150 next week. And it has a very familiar name.
        The pickup truck will be called the F-150 Lightning. Yes, that's also the name of a special edition of the popular Ford truck released in the 1990s. 
        The F…
          </p>,
          <p>
            General Motors is joining the list of big automakers picking their horses in the race to develop better batteries for electric vehicles with its lead of a $139 million investment into the lithium-metal battery developer, SES. Volkswagen has QuantumScape; Ford…
          </p>,
          <p>
            Coinbase makes an impressive public debut, Dell spins out VMware and Ford announces a new hands-free driving system. This is your Daily Crunch for April 14, 2021. The big story: Coinbase goes public Cryptocurrency exchange Coinbase went public today via direc…
          </p>,
          <p>
            A collection of tech and auto industry executives met with the White House to discuss solutions for the worldwide chip shortage Monday. CEOs from Google, Intel, HP, Dell, Ford, and General Motors attended the virtual summit on semiconductors and resilience in…
          </p>,
          <h1>
            Renata Ford ordered to pay nearly $300,000 in legal fees for work on Rob Ford estate - National Post
          </h1>,
          <p>
            The unpaid legal fees arose when Renata Ford sued Doug Ford, his brother Randal Ford and the Ford family companies in 2018
          </p>,
          <h1>
            2021 Ford Explorer Timberline adds legitimate off-road chops - Yahoo News Canada
          </h1>,
          <p>
            &lt;ol&gt;&lt;li&gt;2021 Ford Explorer Timberline adds legitimate off-road chops  Yahoo News Canada
        &lt;/li&gt;&lt;li&gt;First Look: 2021 Ford Explorer Timberline  Driving
        &lt;/li&gt;&lt;li&gt;Ford’s Explorer Timberline makes the everyday an adventure  The Globe and Mail
        &lt;/li&gt;&lt;li&gt;The New 202…
          </p>,
          <h1>
            2021 Ford Explorer Timberline gets ready to rumble - The Car Connection
          </h1>,
          <p>
            &lt;ol&gt;&lt;li&gt;2021 Ford Explorer Timberline gets ready to rumble  The Car Connection
        &lt;/li&gt;&lt;li&gt;Ford’s Explorer Timberline makes the everyday an adventure  The Globe and Mail
        &lt;/li&gt;&lt;li&gt;First Look: 2021 Ford Explorer Timberline  Driving
        &lt;/li&gt;&lt;li&gt;The New 2021 Ford Ex…
          </p>,
          <p>
            Ford, Renault, and Stellantis warn that Q2 production will be heavily affected.
          </p>,
          <h1>
            Ford accelerates EV battery development - Reuters
          </h1>,
          <p>
            Ford Motor Co (F.N) on Tuesday took a fresh step toward taking control of electric vehicle battery design and production, saying it would establish a Southeast Michigan center to research and build prototype lithium ion and solid-state cells.
          </p>,
          <h1>
            2021 Ford Explorer Timberline: Return to Rugged Roots - TractionLife.com
          </h1>,
          <p>
            &lt;ol&gt;&lt;li&gt;2021 Ford Explorer Timberline: Return to Rugged Roots  TractionLife.com
        &lt;/li&gt;&lt;li&gt;2021 Ford Explorer Timberline First Look: Chasing Jeep's Trail Rated Gig  Motor Trend
        &lt;/li&gt;&lt;li&gt;First Look: 2021 Ford Explorer Timberline  Driving
        &lt;/li&gt;&lt;li&gt;2021 Ford Ex…
          </p>,
        ]
      `);
    });
  });
});
