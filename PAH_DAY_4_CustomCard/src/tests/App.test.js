import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CustomCard from '../components/CustomCard';

test('renders_custom_card_component_without_errors', () => {
    render(<CustomCard />);
});

test('renders_card_with_correct_content', () => {
    render(<CustomCard />);
    expect(screen.getByText('Nature')).toBeInTheDocument();
    expect(screen.getByText('In the embrace of nature, the symphony of chirping birds and the gentle caress of a breeze paint a serene canvas of tranquility.')).toBeInTheDocument();
});

test('clicking_share_button_triggers_action', () => {
    render(<CustomCard />);
    const shareButton = screen.getByText('Share');
    fireEvent.click(shareButton);
});

test('clicking_learn_more_button_triggers_action', () => {
    render(<CustomCard />);
    const learnMoreButton = screen.getByText('Learn More');
    fireEvent.click(learnMoreButton);
});
