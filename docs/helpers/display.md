# Display

This section provides a comprehensive guide to the display utility classes. These utilities allow for precise control over the display property of HTML elements, facilitating various layout and visibility adjustments essential for modern web development. Each utility class corresponds to a specific CSS display property, enabling developers to quickly apply the desired styles without writing custom CSS.

## CSS Classes

The display utilities are categorized based on the type of display behavior they control. Here’s a detailed breakdown of each category and the corresponding utility classes:

<div class="d:f x:c:c wrap">
<table>
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code>d:b</code> / <code>show</code></td><td>block</td></tr>
<tr><td><code>d:n</code> / <code>hide</code></td><td>none</td></tr>
<tr><td><code>d:f</code></td><td>flex</td></tr>
<tr><td><code>d:g</code></td><td>grid</td></tr>
<tr><td><code>d:li</code></td><td>list-item</td></tr>
</tbody>
</table>

<table>
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code>d:i</code></td><td>inline</td></tr>
<tr><td><code>d:ib</code></td><td>inline-block</td></tr>
<tr><td><code>d:if</code></td><td>inline-flex</td></tr>
<tr><td><code>d:ig</code></td><td>inline-grid</td></tr>
<tr><td><code>d:it</code></td><td>inline-table</td></tr>
<tr><td><code>d:ili</code></td><td>inline-list-item</td></tr>
</tbody>
</table>

<table>
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code>d:t</code></td><td>table</td></tr>
<tr><td><code>d:tc</code></td><td>table-cell</td></tr>
<tr><td><code>d:tr</code></td><td>table-row</td></tr>
<tr><td><code>d:tcl</code></td><td>table-column</td></tr>
<tr><td><code>d:trg</code></td><td>table-row-group</td></tr>
<tr><td><code>d:tcg</code></td><td>table-column-group</td></tr>
<tr><td><code>d:tfg</code></td><td>table-footer-group</td></tr>
<tr><td><code>d:thg</code></td><td>table-header-group</td></tr>
<tr><td><code>d:tcp</code></td><td>table-caption</td></tr>
</tbody>
</table>
</div>

## Flexbox / Grid - Utilities

Flexbox utilities provide powerful alignment and distribution capabilities, while grid utilities enable complex grid layouts with ease. Below are the classes related to both flexbox and grid layout:

<div class="d:f x:c:c wrap">
<table>
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code>d:f</code></td><td>flex with gap</td></tr>
<tr><td><code>d:f:x</code></td><td>flex (row) with gap</td></tr>
<tr><td><code>d:f:y</code></td><td>flex (column) with gap</td></tr>
<tr><td><code>auto</code></td><td>auto</td></tr>
<tr><td><code>wrap</code></td><td>wrap</td></tr>
<tr><td><code>none</code></td><td>none</td></tr>
<tr><td><code>reverse</code></td><td>reverse</td></tr>
</tbody>
</table>

<table>
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code>d:g</code></td><td>grid with gap</td></tr>
<tr><td><code>d:g:x</code></td><td>grid (column flow) with gap</td></tr>
<tr><td><code>d:g:y</code></td><td>grid (row flow) with gap</td></tr>
<tr><td><code>auto</code></td><td>auto grid</td></tr>
<tr><td><code>wrap</code></td><td>grid-auto-flow: dense</td></tr>
</tbody>
</table>
</div>

## Additional Flex Utilities

<div class="d:f x:c:c wrap">
<table>
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code>grow:0</code></td><td>flex-grow: 0</td></tr>
<tr><td><code>grow:1</code></td><td>flex-grow: 1</td></tr>
<tr><td><code>grow:2</code></td><td>flex-grow: 2</td></tr>
<tr><td><code>grow:3</code></td><td>flex-grow: 3</td></tr>
<tr><td><code>grow:4</code></td><td>flex-grow: 4</td></tr>
<tr><td><code>grow:5</code></td><td>flex-grow: 5</td></tr>
</tbody>
</table>

<table>
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code>shrink:0</code></td><td>flex-shrink: 0</td></tr>
<tr><td><code>shrink:1</code></td><td>flex-shrink: 1</td></tr>
<tr><td><code>shrink:2</code></td><td>flex-shrink: 2</td></tr>
<tr><td><code>shrink:3</code></td><td>flex-shrink: 3</td></tr>
<tr><td><code>shrink:4</code></td><td>flex-shrink: 4</td></tr>
<tr><td><code>shrink:5</code></td><td>flex-shrink: 5</td></tr>
</tbody>
</table>

<table>
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code>basis:0</code></td><td>flex-basis: 0</td></tr>
<tr><td><code>basis:100</code></td><td>flex-basis: 100%</td></tr>
<tr><td><code>basis:auto</code></td><td>flex-basis: auto</td></tr>
</tbody>
</table>
</div>

## Additional Grid Utilities

<div class="d:f x:c:c wrap">
<table>
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code>order:0</code></td><td>order: 0</td></tr>
<tr><td><code>order:1</code></td><td>order: 1</td></tr>
<tr><td><code>order:2</code></td><td>order: 2</td></tr>
<tr><td><code>order:3</code></td><td>order: 3</td></tr>
<tr><td><code>order:4</code></td><td>order: 4</td></tr>
<tr><td><code>order:5</code></td><td>order: 5</td></tr>
</tbody>
</table>
</div>

## Gap Utilities

Gap utilities are used to define gaps between rows and columns in flexbox and grid layouts:

<div class="d:f x:c:c wrap">
<table>
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code>gap:0</code></td><td>gap: 0</td></tr>
</tbody>
</table>
</div>
