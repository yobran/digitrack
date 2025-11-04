import re

# Read the original file
with open('src/pages/SchoolDetails.jsx', 'r') as f:
    content = f.read()

# Remove the misplaced visit photos code (lines 116-130)
lines = content.split('\n')

# Find the start and end of the misplaced block
start_line = None
end_line = None
for i, line in enumerate(lines):
    if "Inside the visit mapping in SchoolDetails.jsx" in line:
        start_line = i
    if start_line is not None and "onClick={() => window.open" in line and i > start_line:
        # Look for the closing brace and parenthesis
        for j in range(i, min(i+10, len(lines))):
            if "))" in lines[j]:
                end_line = j
                break
        break

if start_line is not None and end_line is not None:
    # Remove the misplaced block
    misplaced_block = lines[start_line:end_line+1]
    lines = lines[:start_line] + lines[end_line+1:]
    
    # Find where to insert the block inside the visit mapping
    for i, line in enumerate(lines):
        if "visit.notes && (" in line:
            # Find the closing of the notes section
            for j in range(i, min(i+20, len(lines))):
                if ")}" in lines[j] and "</p>" in lines[j-1]:
                    insert_position = j + 1
                    # Insert the block here (but remove the comment line)
                    fixed_block = misplaced_block[1:]  # Remove the comment line
                    lines = lines[:insert_position] + [''] + fixed_block + [''] + lines[insert_position:]
                    break
            break

    # Write the fixed content
    with open('src/pages/SchoolDetails.jsx', 'w') as f:
        f.write('\n'.join(lines))
    print("Fixed SchoolDetails.jsx successfully!")
else:
    print("Could not find the misplaced block")
