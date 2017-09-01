Small components and formatting
====

We make super small components anyway, so let's put all attributes on their own lines
(including html element name on separate line),
like this, for readability and preventing version control conflicts:

    <md-input-container>
      <textarea
        mdInput
        [formGroup]="formGroup"
        formControlName="description"
        mdTextareaAutosize
        placeholder="My description"
      ></textarea>
    </md-input-container>

