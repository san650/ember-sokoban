import Ember from 'ember';
import { SIZE } from 'sokoban/size';

const { computed } = Ember;

const Component = Ember.Component.extend({
  classNames: ['cell'],
  classNameBindings: ['cellType'],
  attributeBindings: ['style'],

  style: computed('cell.{row,column}', function() {
    let left = SIZE * this.get('cell.column');
    let top = SIZE * this.get('cell.row');

    return `left:${left}px;top:${top}px`;
  }),

  cellType: computed('cell', function() {
    if (this.get('cell.isGround')) {
      return 'cell__ground';
    } else {
      return 'cell__wall';
    }
  })
});

Component.reopenClass({
  positionalParams: ['cell']
});

export default Component;