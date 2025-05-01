# LeetCode formatter JS cli tool

Just a very simple cli tool that i use for formatting names of leetcode problems to use later on for naming `.js` files.

## Installation

### 1. Clone the repo

```bash
git clone git@github.com:LLosTy/LeetCodeFormatter.git
```

### 2. Navigate to directory

```bash
cd LeetCodeFormatter/
```

### 3. Make the file executable locally

Inside of the root of the project dir, run:

```bash
chmod +x index.js
```

### 4. Install globally

```bash
npm install -g .
```

## Usage

To use, run `lcf` in terminal

```bash
lcf
```

The program will prompt you for the leetcode problem number and name, after inputting your problem name, it will output the formatted format.
<br/>
Input format:

```
2666. Allow One Function Call
```

Output format:

```
Formatted: 2666-AllowOneFunctionCall
```
