<h2 class="picTextSectionHeading">{picTextSectionHeading}</h2>
{{#each picTextSections}}
<div class="picTextSection">
    <div class="sectionLogoContainer">
        <i class="{{sectionLogoURL}}"></i>
    </div>
    <div class="picTextMidSection">
        <h2>{{sectionHeading}}</h2>
        <p>{{sectionBody}}</p>
    </div>
    <div class="demoPicContainer">
        <img src={{pictureURL}} />
    </div>
</div>
{{/each}}